import React from 'react'

const CustomTabBar = ({ state, descriptors, navigation }) => (
    <View style={{ flexDirection: 'row', backgroundColor: '#000', height: 60, borderRadius:10 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
  
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
  
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
  
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon
              name={options.tabBarIcon?.name || 'home-outline'}
              size={24}
              color={isFocused ? '#ff6347' : 'black'}
            />
            <Text style={{ color: isFocused ? '#ff6347' : 'black' }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
  

export default CustomTabBar