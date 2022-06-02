import { AppAbility } from 'src/casl/casl-ability.factory';
import { Student } from 'src/modules/student/student.schema';
import { User } from 'src/modules/users/users.schema';
export interface IPolicyHandler {
    // handle(ability: AppAbility, user: User, student: Student): boolean;
    handle(ability: AppAbility): boolean;
}

type PolicyHandlerCallback = (ability: AppAbility) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;