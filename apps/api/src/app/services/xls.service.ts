import { Injectable } from '@nestjs/common';
import { readFileSync }  from 'fs';
import * as excelToJson from 'convert-excel-to-json';

@Injectable()
export class XLSService {

  constructor(
  ) {}

  readLocalFile(filePath: string) {
    try {
      const data = readFileSync(filePath, {encoding: 'utf-8'});
      return data;
    } catch (error) {
      throw new Error('unable to get version')
    }
  }

  excelToJson(sourceFile: string): any {
    try {
      const result = excelToJson({
        sourceFile
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  normalize(jsonArray: any[]) {
    const [header, ...students] = jsonArray;
    return students.map(s => this.renameKeys(header, s));
    
  }

  renameKeys(keysMap, obj) {
    return Object.keys(obj).reduce(
        (acc, key) => ({
          ...acc,
          ...{ [(keysMap[key] || key || '')
            .toLowerCase()
            .replace(/é/gi, "e")
            .replace(/è/gi, "e")
            .replace(/à/gi, "a")
            .replace(/\s/g, '_')
          ]: obj[key] }
        }),
      {}
    );
  }
}
