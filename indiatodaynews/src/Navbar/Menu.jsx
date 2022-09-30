import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { AddIcon, HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
  function MenuIconList() {
    return <>
    <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    
    
  />
  <MenuList bg='black' color=''>
    <MenuItem icon={<AddIcon />} command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
    </>
  }
  export default MenuIconList