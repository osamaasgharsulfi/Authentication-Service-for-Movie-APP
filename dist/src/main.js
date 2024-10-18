"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = exports.AuthModule = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
var auth_module_1 = require("./auth/auth.module");
Object.defineProperty(exports, "AuthModule", { enumerable: true, get: function () { return auth_module_1.AuthModule; } });
var jwt_guard_1 = require("./auth/guard/jwt.guard");
Object.defineProperty(exports, "JwtGuard", { enumerable: true, get: function () { return jwt_guard_1.JwtGuard; } });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Accept, Authorization',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    await app.listen(6000);
    console.log(`Server runing on port 6000`);
}
bootstrap();
//# sourceMappingURL=main.js.map