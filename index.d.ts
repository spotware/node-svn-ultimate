declare module "node-svn-ultimate" {
    import EventEmitter = NodeJS.EventEmitter;
    export interface IExportOptions {
        username: string;
        password: string;
    }

    export type TCheckout = (
        url: string,
        dir: string,
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TCommit = (
        files: string | string[],
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TCopy = (
        srcs: string | string[],
        dst: string,
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TAdd = (
        files: string | string[],
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TRemove = (
        srcs: string | string[],
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TPropSet = (
        propName: string,
        propVal: string,
        wc: string,
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TMucc = (
        commandArray: string[],
        commitMessage: string,
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TGetRevision = (
        target: string,
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TParseUrl = (
        url: string
    ) => void;

    export type TUrlHandler = (
        url: string,
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TGetTags = TUrlHandler;
    export type TGetLatestTag = TUrlHandler;
    export type TGetBranches = TUrlHandler;

    export type TWorkingCopyTempUrl = (
        url: string,
        wc: string,
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TRelocate = TWorkingCopyTempUrl;
    export type TSwitchf = TWorkingCopyTempUrl;

    export type TWorkingCopy = (
        wc: string,
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TCleanup = TWorkingCopy;
    export type TRevert = TWorkingCopy;
    export type TStatus = TWorkingCopy;
    export type TGetWorkingCopyRevision = TWorkingCopy;

    export type TPropsHandler = (
        propName: string,
        target: string,
        options: IExportOptions,
        callback: (error?) => void
    ) => EventEmitter;

    export type TPropDel = TPropsHandler;
    export type TPropGet = TPropsHandler;

    export type TFilesHandler = (
        src: string,
        dst: string,
        options: IExportOptions,
        callback: (error?) => void
    ) => EventEmitter;

    export type TExport = TFilesHandler;
    export type TImport = TFilesHandler;
    export type TMove = TFilesHandler;

    export type TTargetString = (
        targets: string | string[],
        options: IExportOptions,
        callback: (error?) => void
    ) => void;

    export type TInfo = TTargetString;
    export type TList = TTargetString;
    export type TLock = TTargetString;
    export type TLog = TTargetString;
    export type TMkdir = TTargetString;
    export type TCat = TTargetString;
    export type TPropList = TTargetString;
    export type TUnlock = TTargetString;
    export type TUpdate = TTargetString;
    export type TUpgrade = TTargetString;

    export interface INodeSvnUltimateCommands {
        checkout: TCheckout;
        co: TCheckout;
        add: TAdd;
        cat: TCat;
        cleanup: TCleanup;
        commit: TCommit;
        ci: TCommit;
        copy: TCopy;
        cp: TCopy;
        del: TRemove;
        remove: TRemove;
        rm: TRemove;
        export: TExport;
        exp: TExport;
        import: TImport;
        imp: TImport;
        info: TInfo;
        list: TList;
        ls: TList;
        lock: TLock;
        log: TLog;
        mkdir: TMkdir;
        move: TMove;
        mv: TMove;
        rename: TMove;
        ren: TMove;
        propdel: TPropDel;
        pdel: TPropDel;
        pd: TPropDel;
        propget: TPropGet;
        pget: TPropGet;
        pg: TPropGet;
        proplist: TPropList;
        plist: TPropList;
        pl: TPropList;
        propset: TPropSet;
        pset: TPropSet;
        ps: TPropSet;
        relocate: TRelocate;
        revert: TRevert;
        status: TStatus;
        stat: TStatus;
        st: TStatus;
        switch: TSwitchf;
        unlock: TUnlock;
        update: TUpdate;
        up: TUpdate;
        upgrade: TUpgrade;
        mucc: TMucc;
        getRevision: TGetRevision;
        getWorkingCopyRevision: TGetWorkingCopyRevision;
        parseUrl: TParseUrl;
        getTags: TGetTags;
        getLatestTag: TGetLatestTag;
        getBranches: TGetBranches;
    }

    export const commands: INodeSvnUltimateCommands;
}
