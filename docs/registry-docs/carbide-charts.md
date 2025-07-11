# Carbide Helm Charts

Along with our secured images, we also provide helm charts through the CSR to install various components of the Carbide product suite. These charts include the necessary components to run [STIGATRON](https://rancherfederal.github.io/carbide-docs/docs/stigatron-docs/introduction), an airgapped copy of all Rancher product docs, and a custom build of Rancher with our white-labeling.

**Available Helm Charts**
```bash
NAME                            CHART VERSION   APP VERSION     DESCRIPTION
carbide-charts/airgapped-docs   0.1.49          0.1.4           Rancher Government Airgapped Docs
carbide-charts/heimdall2        0.1.45          0.1.1           Rancher Government Heimdall2 Tool
carbide-charts/rancher          2.8.3           v2.8.3          Install Rancher Server to manage Kubernetes...
carbide-charts/stigatron        0.2.5           0.2.2           Rancher Government Stigatron Extension
carbide-charts/stigatron-ui     0.2.3           0.2.0           Rancher Government Stigatron UI Extension
```

The charts are available at https://rancherfederal.github.io/carbide-charts.

## Obtaining Chart Manifests

### Connected Environments

Add and update the helm chart repository:

```bash
helm repo add carbide-charts https://rancherfederal.github.io/carbide-charts
helm repo update
```

View the charts in the helm chart repository:

```bash
helm search repo carbide-charts
```

Example install of a helm chart:

```bash
helm install <release-name> carbide-charts/<chart>
```

If you would like to add the Carbide Helm Charts to the Rancher Chart Catalog (so you can use the user interface to install them) please follow the steps in the [Rancher Docs](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher).

### Airgapped Environments

#### In Connected Environment

Generate the Hauler manfiest for the Carbide Helm Charts:

```bash
cat <<EOF > carbide-charts.yaml
apiVersion: content.hauler.cattle.io/v1
kind: Charts
metadata:
  name: carbide-charts
spec:
  charts:
    - name: rancher
      repoURL: https://rancherfederal.github.io/carbide-charts
      version: 2.8.3
    - name: airgapped-docs
      repoURL: https://rancherfederal.github.io/carbide-charts
      version: 0.1.49
    - name: stigatron
      repoURL: https://rancherfederal.github.io/carbide-charts
      version: 0.2.5
    - name: stigatron-ui
      repoURL: https://rancherfederal.github.io/carbide-charts
      version: 0.2.3
---
apiVersion: content.hauler.cattle.io/v1
kind: Charts
metadata:
  name: carbide-dependency-charts
spec:
  charts:
    - name: heimdall2
      repoURL: https://rancherfederal.github.io/carbide-charts
      version: 0.1.45
    - name: nats
      repoURL: https://nats-io.github.io/k8s/helm/charts
      version: 1.1.5
EOF
```

Fetch the content from generated Hauler manifest and verify the version and the platform/architecture:

```bash
hauler store sync --store carbide-store --files carbide-charts.yaml --platform <platform/arch>
```

Save and output the content from the Hauler store to tarball:

```bash
hauler store save --store carbide-store --filename carbide-charts.tar.zst
```

#### In Airgapped Environment

Load the content from the tarball to the Hauler store:

```bash
hauler store load --store carbide-store carbide-charts.tar.zst
```

Serve the content from the Hauler store:

```bash
hauler store serve fileserver --store carbide-store
```

Example install of a helm chart:

```bash
helm install <release-name> http://<FQDN or IP>:<PORT>/<chart>.tgz
```
