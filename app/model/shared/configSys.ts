
class configSys {
    public Language: string = "";
    public Version: string = "";
    public VersionDescription: string = "";
    public BuildDate: string = "";
    public PageSize: number = 10;
    public Secret: string = "";
    public ReleaseNote: string = "";
    public Port: number = 0;
    public AppName: string = "";
    public AppCode: string = "";
    public IsEncrypt: boolean = false;
    public UrlApi: string = "";
    public MessageTimer: number = 0;
    public GetFastMaster: number = 0;
    public GetFastTransaction: number = 0;
    public Footer: string = "";
    public Title: string = "";
}

export default configSys;