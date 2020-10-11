import {ModuleWithProviders, NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {environment} from '../../environments/environment';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  const i18nPrefix = environment.i18n;
  return new TranslateHttpLoader(http, i18nPrefix, '.json');
}

@NgModule({
  declarations: [],
  imports: [],
  exports: [TranslateModule]
})
export class TranslationModule {

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: TranslateModule,
      providers: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          },
          defaultLanguage: environment.language
        }).providers
      ]
    };
  }
}
