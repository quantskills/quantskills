export function renderSiteData(model) {
  return { snapshot_id: model.snapshot_id, taxonomy: model.taxonomy, assets: model.assets, resources: model.resources, profiles: model.profiles || [], adapters: model.adapters || [], compatibility_edges: model.compatibility_edges || [] };
}
