import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Button, Menu } from 'react-native-paper';

import theme from '../../theme';

const styles = StyleSheet.create({
  menu: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const OrderedByMenu = ({ sorting, setSorting }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.menu}>
      <Menu
        style={{marginTop: 40,}}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu} icon='chevron-down' color={theme.colors.textPrimary}>{sorting}</Button>
        }>
        <Menu.Item onPress={() => setSorting('Latest repositories')} title='Latest repositories' />
        <Menu.Item onPress={() => setSorting('Highest rated repositories')} title='Highest rated repositories' />
        <Menu.Item onPress={() => setSorting('Lowest rated repositories')} title='Lowest rated repositories' />
      </Menu>
    </View>
  );
};

export default OrderedByMenu;