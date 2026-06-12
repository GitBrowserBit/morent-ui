import { Button, type ButtonProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ButtonSize = "sm" | "md" | "lg";

interface PrimaryButtonProps extends ButtonProps {
  label?: String;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: ButtonSize;
  icon?: ReactNode;
  iconOnly?: boolean;
  "araia-label"?: String;
}

const sizeStyles = {
  sm: { h: "29px", px: "16px", fontSize: "text_sx" },
  md: { h: "37px", px: "16px", fontSize: "text_sx" },
  lg: { h: "52px", px: "24px", fontSize: "text_base" },
};

export function PrimaryButton({
  label,
  leftIcon,
  rightIcon,
  size = "md",
  icon,
  iconOnly,
  ...props
}: PrimaryButtonProps) {
  const styles = sizeStyles[size];

  if (iconOnly && !props["aria-label"]) {
    console.warn("primaryButton: aria-label é obrigatorio quando iconOly=true");
  }
  return (
    <Button
      bg="primary.500"
      color="primary.0"
      fontWeight="semibold"
      borderRadius="4px"
      h={styles.h}
      px={styles.px}
      fontSize={styles.fontSize}
      _hover={{ bg: "primary.600" }}
      _active={{ bg: "primary.700" }}
      _disabled={{
        bg: "primary.200",
        opacity: 1,
        cursor: "not-allowed",
      }}
      _focusVisible={{ bg: "primary.700" }}
      {...props}
    >
      {iconOnly ? (icon) : (
        <>
          {leftIcon}
          {label}
          {rightIcon}
        </>
      )}
    </Button>
  );
}
