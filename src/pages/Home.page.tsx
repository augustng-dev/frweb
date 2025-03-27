import Main from '@/components/Main/Main';
import { TableSort } from '@/components/TableSort/TableSort';
import { AppShell, Flex, Image } from '@mantine/core';

export function HomePage() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Flex
          p="md"
          gap="md"
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
        >
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
      </AppShell.Header>
      <AppShell.Main p="md">
        <Main />
      </AppShell.Main>
    </AppShell>
  );
}
