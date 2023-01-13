import {config as dotEnvConfig} from 'dotenv'
dotEnvConfig()
export const config = {
  projectId: process.env.projectId,
  title: process.env.title,
}
