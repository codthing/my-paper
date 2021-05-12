import React from 'react';
import { TouchableRipple, Switch } from 'react-native-paper';
import { PreferencesContext } from '../constants/PreferencesContext';

export const ThemeToggle = () => {

    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

    return (

        <TouchableRipple onPress={() => toggleTheme()}>
            <Switch
                color={'#2F95DC'}
                value={isThemeDark}
            />
        </TouchableRipple>

    );
};