import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function TestimonalCard({testimonal}) {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        {testimonal.text}
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={testimonal.image}
          alt={'Jenny Wilson'}
          mb={2}
        />
        <Text fontWeight={600}>{testimonal.name}</Text>
      </Box>
    </Stack>
  );
}
