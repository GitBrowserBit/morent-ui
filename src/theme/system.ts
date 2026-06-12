import { 
  createSystem,
  defaultConfig,
  defineConfig,
  defineTokens, } from "@chakra-ui/react"
import { colors } from "./colors";
import { fontSizes } from "./typography";

export const tokens = defineTokens({
    colors,
    fontSizes
});

  const config = defineConfig({
    theme: {
        tokens,
    },
  })
export const system = createSystem(defaultConfig, config)

