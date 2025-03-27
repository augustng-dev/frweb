import { Container, Flex, Image } from '@mantine/core';

function Header() {
  return (
    <Container>
      <Flex justify="space-between" align="center">
        <Image
            radius="md"
            h={48}
            w="auto"
            fit="contain"
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/home/logo_fpt_text_black.png?modified=20240111094946"
        />
        <Image
            radius="md"
            h={48}
            w="auto"
            fit="contain"
            src="https://akacam.io/wp-content/uploads/2023/11/akacam-logo.png"
        />
      </Flex>
    </Container>
  );
}