import Model from "../model/shared/configSys";
import WebConfig from "../config/WebConfig"
const ConfigSys: Model = new Model();

//System
ConfigSys.Language = "TH"; //["TH","EN","OT"]
ConfigSys.PageSize = 10;
ConfigSys.Secret = "3rapazsSecret";
ConfigSys.Port = 9001; // Port Deploy
ConfigSys.AppName = "App Name";
ConfigSys.AppCode = "Nuxt";
ConfigSys.IsEncrypt = false; // เข้ารหัส SQL 
ConfigSys.UrlApi = WebConfig.UrlApi;
ConfigSys.MessageTimer = 1500;
ConfigSys.PageSize = 25
ConfigSys.GetFastMaster = 2000
ConfigSys.GetFastTransaction = 4000
//Version
ConfigSys.Version = "Beta";
ConfigSys.BuildDate = "";
ConfigSys.VersionDescription = "";
ConfigSys.Footer = "© 2025 Dev By 3rapazs [30/06/2025.1]"
ConfigSys.Title = "Title Test";

//ReleaseNote
ConfigSys.ReleaseNote = `









`;

export default ConfigSys;
