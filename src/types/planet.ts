export interface PlanetData {
  name: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed: number;
  nasaUrl: string;
  description: string;
  funFact: string;
  emissive?: string;
  roughness?: number;
  metalness?: number;
  atmosphereColor?: string;
  hasRings?: boolean;
}

export const PLANETS: PlanetData[] = [
  {
    name: "Mercury",
    color: "#A5A5A5",
    size: 0.8,
    orbitRadius: 6,
    orbitSpeed: 0.0008,
    rotationSpeed: 0.02,
    nasaUrl: "https://solarsystem.nasa.gov/planets/mercury/overview/",
    description: "The smallest and fastest planet!",
    funFact: "A year on Mercury is just 88 Earth days!",
    roughness: 0.9,
    metalness: 0.4,
    emissive: "#1a1a1a"
  },
  {
    name: "Venus",
    color: "#FFA07A",
    size: 1.8,
    orbitRadius: 10,
    orbitSpeed: 0.0006,
    rotationSpeed: -0.015,
    nasaUrl: "https://solarsystem.nasa.gov/planets/venus/overview/",
    description: "The hottest planet in our solar system!",
    funFact: "Venus spins backwards compared to other planets!",
    roughness: 0.7,
    metalness: 0.3,
    atmosphereColor: "#ffccaa"
  },
  {
    name: "Earth",
    color: "#4B9CD3",
    size: 2.0,
    orbitRadius: 14,
    orbitSpeed: 0.0005,
    rotationSpeed: 0.025,
    nasaUrl: "https://solarsystem.nasa.gov/planets/earth/overview/",
    description: "Our beautiful home planet!",
    funFact: "Earth is the only planet known to have life!",
    roughness: 0.6,
    metalness: 0.4,
    atmosphereColor: "#add8e6"
  },
  {
    name: "Mars",
    color: "#CD5C5C",
    size: 1.0,
    orbitRadius: 18,
    orbitSpeed: 0.0004,
    rotationSpeed: 0.02,
    nasaUrl: "https://solarsystem.nasa.gov/planets/mars/overview/",
    description: "The Red Planet!",
    funFact: "Mars has the largest volcano in the solar system!",
    roughness: 0.8,
    metalness: 0.2,
    emissive: "#2b1410"
  },
  {
    name: "Jupiter",
    color: "#DEB887",
    size: 5.0,
    orbitRadius: 24,
    orbitSpeed: 0.0003,
    rotationSpeed: 0.04,
    nasaUrl: "https://solarsystem.nasa.gov/planets/jupiter/overview/",
    description: "The biggest planet!",
    funFact: "Jupiter's Great Red Spot is a giant storm that's been going for 400 years!",
    roughness: 0.5,
    metalness: 0.5,
    atmosphereColor: "#c4a484"
  },
  {
    name: "Saturn",
    color: "#F4D03F",
    size: 4.4,
    orbitRadius: 30,
    orbitSpeed: 0.00025,
    rotationSpeed: 0.035,
    nasaUrl: "https://solarsystem.nasa.gov/planets/saturn/overview/",
    description: "The planet with beautiful rings!",
    funFact: "Saturn could float in a bathtub if there was one big enough!",
    roughness: 0.4,
    metalness: 0.6,
    hasRings: true,
    atmosphereColor: "#fff5cc"
  },
  {
    name: "Uranus",
    color: "#ADD8E6",
    size: 3.6,
    orbitRadius: 36,
    orbitSpeed: 0.0002,
    rotationSpeed: -0.03,
    nasaUrl: "https://solarsystem.nasa.gov/planets/uranus/overview/",
    description: "The sideways planet!",
    funFact: "Uranus rolls around the Sun like a ball!",
    roughness: 0.3,
    metalness: 0.7,
    atmosphereColor: "#e6f3ff"
  },
  {
    name: "Neptune",
    color: "#4169E1",
    size: 3.6,
    orbitRadius: 42,
    orbitSpeed: 0.00015,
    rotationSpeed: 0.032,
    nasaUrl: "https://solarsystem.nasa.gov/planets/neptune/overview/",
    description: "The windiest planet!",
    funFact: "Neptune has the strongest winds in the solar system - up to 1,200 mph!",
    roughness: 0.3,
    metalness: 0.7,
    atmosphereColor: "#4169e1"
  }
];