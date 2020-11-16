from marshmallow_sqlalchemy import ModelSchema
from sqlalchemy import event
from sqlalchemy.orm import mapper


class CustomModelSchema(ModelSchema):
    ''' Class to help link Model and Schema '''

    def __init_subclass__(cls):
        cls.Meta.model.__marshmallow__ = cls


def setup_serializer(base):
    ''' Create a function that injects (de)serializer classes and methods '''

    def setup_schema_fn(base):
        for class_ in base._decl_class_registry.values():
            if hasattr(class_, '__tablename__'):

                # If Model already has a schema do not override it
                if not hasattr(class_, '__marshmallow__'):
                    class Meta():
                        model = class_
                        sqla_session = class_.session
                        strict = True
                        include_fk = True

                    schema_class_name = '%sSchema' % class_.__name__

                    schema_class = type(schema_class_name,
                                        (ModelSchema,),
                                        {'Meta': Meta})

                    setattr(class_, '__marshmallow__', schema_class)

    # Listen for the SQLAlchemy event and run setup_schema.
    # Note: This has to be done after Base and session are setup
    event.listen(mapper, 'after_configured', setup_schema_fn(base))

    return setup_schema_fn
