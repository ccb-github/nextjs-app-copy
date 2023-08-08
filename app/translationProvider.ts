'use client';

import {appWithTranslation} from "next-i18next"


// export default appWithTranslation 
export default function TranslateWrapper(wrappedComponent: any) {
  return  appWithTranslation(wrappedComponent)
}