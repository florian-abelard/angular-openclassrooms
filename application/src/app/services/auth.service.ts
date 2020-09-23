export class AuthService {

    isAuthenticated = false;

    signIn(): Promise<boolean> {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.isAuthenticated = true;
                        resolve(true);
                    }, 1000
                );
            }
        );
    }

    signOut(): void {
        this.isAuthenticated = false;
    }
}
