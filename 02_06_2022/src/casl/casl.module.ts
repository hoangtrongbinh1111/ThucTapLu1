import { Module, forwardRef } from '@nestjs/common';
import { CaslAbilityFactory } from './casl-ability.factory';
import { UsersModule } from 'src/modules/users/users.module';
@Module({
    imports: [forwardRef(() => UsersModule),],
    providers: [CaslAbilityFactory],
    exports: [CaslAbilityFactory],
})
export class CaslModule { }
