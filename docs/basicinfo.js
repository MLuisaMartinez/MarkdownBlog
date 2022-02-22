const swagger = require('swagger-ui-express')

app.use('/swagger', swagger.serve, swagger.setup(swaggerRoute))
