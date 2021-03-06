const configEnv = {
  "development": {
    "port": "3030",
    "urls": {
      "applozicBaseUrl": "https://apps-test.applozic.com",
      "kommunicateBaseUrl": "https://api-test.kommunicate.io",
      "hostUrl": "http://localhost:3030"
    },
    "pluginProperties": {
      "pseudoNameEnabled": true
    },
    "thirdPartyIntegration": {
      "sentry": {
          "dsn": "https://96d4622a4b27476f9544833f8bf6e4f7@sentry.io/1729405",
          "enabled": false
      }
    }
  },
  "test": {
    "port": "3030",
    "urls": {
      "applozicBaseUrl": "https://apps-test.applozic.com",
      "kommunicateBaseUrl": "https://api-test.kommunicate.io",
      "hostUrl": "https://widget-test.kommunicate.io"
    },
    "pluginProperties": {
      "pseudoNameEnabled": true
    },
    "thirdPartyIntegration": {
      "sentry": {
          "dsn": "https://96d4622a4b27476f9544833f8bf6e4f7@sentry.io/1729405",
          "enabled": true
      }
    }
  },
  "staging": {
    "port": "3031",
    "urls": {
      "applozicBaseUrl": "https://apps-test.applozic.com",
      "kommunicateBaseUrl": "https://api-staging.kommunicate.io",
      "hostUrl": "https://widget-staging.kommunicate.io"
    },
    "pluginProperties": {
      "pseudoNameEnabled": true
    },
    "thirdPartyIntegration": {
      "sentry": {
          "dsn": "https://96d4622a4b27476f9544833f8bf6e4f7@sentry.io/1729405",
          "enabled": true
      }
    }
  },
  "prod": {
    "port": "3030",
    "urls": {
      "applozicBaseUrl": "https://chat.kommunicate.io",
      "kommunicateBaseUrl": "https://api.kommunicate.io",
      "hostUrl": "https://widget.kommunicate.io"
    },
    "pluginProperties": {
      "pseudoNameEnabled": true
    },
    "thirdPartyIntegration": {
      "sentry": {
          "dsn": "https://9f71614ef8184d0cab00074555dad9a7@sentry.io/1321911",
          "enabled": true
      }
    }
  },
  "prod_ca": {
    "port": "3031",
    "urls": {
      "applozicBaseUrl": "https://chat-ca.kommunicate.io",
      "kommunicateBaseUrl": "https://api-ca.kommunicate.io",
      "hostUrl": "https://widget-ca.kommunicate.io"
    },
    "pluginProperties": {
      "pseudoNameEnabled": true
    },
    "thirdPartyIntegration": {
      "sentry": {
          "dsn": "https://9f71614ef8184d0cab00074555dad9a7@sentry.io/1321911",
          "enabled": true
      }
    }
  },
  "commonResources": {
    // add common resources for all environments below
  }

}

const getEnvId = function () {
  return process.env.NODE_ENV || "development";
};

const config = configEnv[getEnvId()];

module.exports = config;
module.exports.getEnvId = getEnvId;