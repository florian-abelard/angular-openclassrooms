import { Subject } from 'rxjs';
import { User } from '../models/user.model';

export class UserService {

  users: User[] = [];
  userSubject = new Subject<User[]>();

  constructor() {
    this.users.push(
      new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
    );
  }

  emitUsers(): void {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User): void {
    this.users.push(user);
    this.emitUsers();
  }
}
