import { useColorMode, IconButton } from "@chakra-ui/react"
import {SunIcon, MoonIcon} from '@chakra-ui/icons'


const DarkModeSwitc = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'white',
        dark: 'black'
    }
    

    return (
        <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            color={iconColor[colorMode]}
        />
    )
}

export default DarkModeSwitc;