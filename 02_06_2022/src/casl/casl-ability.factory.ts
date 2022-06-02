import {
    Ability,
    AbilityBuilder,
    AbilityClass,
    ExtractSubjectType,
    InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Action } from 'src/common/enums/action.enum';
import { Role } from 'src/common/enums/roles.enum';
import { Status } from 'src/common/enums/status.enum';
import { Student } from 'src/modules/student/student.schema';
import { User } from '../modules/users/users.schema';
import { Logger } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

type Subjects = InferSubjects<typeof Student | typeof User> | 'all';
export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    constructor(private readonly usersService: UsersService) { }
    async createForUser(user: User | any) {
        const { can, cannot, build } = new AbilityBuilder<
            Ability<[Action, Subjects]>
        >(Ability as AbilityClass<AppAbility>);
        const userData = await this.usersService.findOne({ _id: user._id });
        Logger.log(userData);
        if (userData?.roles.includes(Role.Admin)) {
            Logger.log("admin");
            can(Action.Manage, 'all'); // có quyền admin
        }
        if (userData?.roles.includes(Role.User)) {
            Logger.log("user");
            can(Action.Read, Student);
            can(Action.Read, User, { email: userData.email }); // xem được thông tin của bản thân
            cannot(Action.Delete, Student);
            cannot(Action.Update, Student);
            cannot(Action.Create, Student);
        }
        if (!userData) {
            cannot(Action.Delete, Student);
            cannot(Action.Update, Student);
            cannot(Action.Create, Student);
        }
        return build({
            detectSubjectType: (item) =>
                item.constructor as ExtractSubjectType<Subjects>,
        });
    }
}