import{ Entity, EntityRepository, Repository } from "typeorm"
import { EntityListenerMetadata } from "typeorm/metadata/EntityListenerMetadata";
import { Setting } from "../entities/Setting";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting>{}

export {SettingsRepository}