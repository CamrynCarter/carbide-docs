/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  carbideSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Carbide Secured Registry (CSR)',
      collapsed: false,
      items: [
        'registry-docs/introduction',
        'registry-docs/architecture',
        'registry-docs/release-cadence',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'registry-docs/prereqs',
            'registry-docs/validating-images',
            {
              type: 'category',
              label: 'Seeding a Registry',
              items: [
                {
                  type: 'category',
                  label: 'Connected Environments',
                  items: [
                    'registry-docs/copying-images',
                  ],
                },
                {
                  type: 'category',
                  label: 'Airgapped Environments',
                  items: [
                    'registry-docs/downloading-images',
                    'registry-docs/loading-images',
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
            id: 'registry-docs/carbide-charts',
          label: 'Helm Charts',
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'registry-docs/configuration/kubernetes',
            'registry-docs/configuration/rancher',
          ],
        },
        'registry-docs/enforcement',
        {
          type: 'category',
          label: 'Uninstall',
          items: [
            'registry-docs/uninstall-kubernetes',
            'registry-docs/uninstall-rancher',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'RGS Application Collection',
      collapsed: false,
      items: [
        'app-collection-docs/introduction',
        'app-collection-docs/glossary',
        'app-collection-docs/getting-started',
        'app-collection-docs/appco-portal',
      ],
    },
    {
      type: 'category',
      label: 'IC Cloud Support',
      collapsed: false,
      items: [
        'IC-cloud-support-docs/introduction',
        'IC-cloud-support-docs/prereqs',
        'IC-cloud-support-docs/installation',
        'IC-cloud-support-docs/usage',
      ],
    },
    {
      type: 'category',
      label: 'STIGATRON',
      collapsed: false,
      items: [
        'stigatron-docs/introduction',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'stigatron-docs/prereqs',
            'stigatron-docs/installation',
          ],
        },
        {
          type: 'category',
          label: 'Using STIGATRON',
          items: [
            'stigatron-docs/create-scan',
            'stigatron-docs/using-heimdall',
          ],
        },
        'stigatron-docs/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Airgapped Docs',
      collapsed: false,
      items: [
        'airgapped-docs/introduction',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'airgapped-docs/prereqs',
            'airgapped-docs/installation',
          ],
        },
        'airgapped-docs/uninstall',
      ],
    },
    'known-limits',
    'feedback',
  ],

};

module.exports = sidebars;
