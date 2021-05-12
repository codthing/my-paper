import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

import { PreferencesContext } from './constants/PreferencesContext';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(//经常切换用useMemo, 而不是useEffect
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <Navigation theme={theme} />
        </PaperProvider>
      </PreferencesContext.Provider>
    );
  }
}