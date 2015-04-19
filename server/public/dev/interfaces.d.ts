declare var $alert: any;
declare var require: any;
declare var angular: any;
declare var bootbox: any;

declare var describe: any;
declare var beforeEach: any;
declare var module: any;
declare var beforeEach: any;
declare var inject: any;
declare var it: any;
declare var expect: any;
declare var describe: any;
declare var beforeEach: any;
declare var spyOn: any;
declare var afterEach: any;
declare var it: any;
declare var expect: any;
declare var describe: any;
declare var beforeEach: any;
declare var spyOn: any;
declare var it: any;
declare var expect: any;
declare var describe: any;
declare var beforeEach: any;
declare var spyOn: any;
declare var it: any;
declare var expect: any;

interface IProject {
  id?: string;
  name: string;
  description: string;
  layoutHtml: string;
  settings: IProjectSettings;
  languages: ILanguage[];
}

interface ILanguage {
  id?: string;
  key: string;
  name: string;
}

interface IProjectSettings {
  urlAuthority: string;
}

interface ITemplate {
  id?: string;
  projectId?: string;
  name: string;
  description: string;
  templateHtml: string;
  sampleJson: string;
}
