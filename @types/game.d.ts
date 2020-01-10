declare namespace game {
    export const Default: Game;
    export const At: (path: string) => Game
    export class Game {
        Available(): Promise<[Package[], GoError]>
        Installed(): Promise<[Package[], GoError]>

        Get(name: string): Promise<[Package, GoError]>
        Find(name: string): Promise<Package[]>

        BasePath(): Promise<[string, GoError]>
    }
}