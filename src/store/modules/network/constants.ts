import { AvaNetwork } from '@/js/AvaNetwork'

export const MainnetConfig = new AvaNetwork(
    'Flare',
    'https://flare-api.flare.network:443',
    14,
    undefined,
    undefined,
    true
)

export const TestnetConfig = new AvaNetwork(
    'Coston 2',
    'https://coston2-api.flare.network:443',
    114,
    undefined,
    undefined,
    true
)
