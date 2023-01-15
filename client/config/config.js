import { config as dotEnvConfig } from "";
dotEnvConfig();

export const config = {
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
};
