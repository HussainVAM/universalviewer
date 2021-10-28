import { ILocale } from "./ILocale";

export interface IUVData {
  annotations?: string;
  assetsDir?: string;
  canvasIndex?: number;
  collectionIndex?: number;
  config?: any; // do not pass this on initialisation, internal use only
  embedded?: boolean;
  isReload?: boolean;
  locales?: ILocale[];
  manifestIndex?: number;
  manifestUri?: string;
  rangeId?: string;
  target?: string;
}
