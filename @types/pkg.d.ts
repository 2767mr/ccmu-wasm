declare class PkgError extends GoError{
    Mode: number; //TODO: Make enum
    Reason: number; //TODO: Make enum

    String(): Promise<string>
    Unwrap(): GoError
}

declare class GoError {
    Error(): Promise<string>
}

declare class Package {
    Info(): Promise<[Info, GoError]>
    Installed(): Promise<bool>
    Available(): Promise<bool>

    Install(): Promise<error>
    Uninstall(): Promise<error>
    Update(): Promise<error>

    Dependencies(): Promise<[Package[], error]>
    NewestDependencies(): Promise<[Package[], error]>
}