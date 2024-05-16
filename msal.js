import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
    auth: {
      clientId: '29a8b44e-82f3-400e-b098-99c4584e2924',
      authority: 'https://login.microsoftonline.com/92e84ceb-fbfd-47ab-be52-080c6b87953f/',
      redirectUri: 'http://localhost/myapp/'
    }
  };
  


const msalClient = new PublicClientApplication(msalConfig);

const getToken = async () => {
  const tokenRequest = {
    scopes: ['api://<seu_app_id>/access_as_user'] // Escopos necessários para acessar a API protegida
  };

  try {
    const response = await msalClient.acquireTokenSilent(tokenRequest);
    return response.accessToken;
  } catch (error) {
    console.error('Erro ao obter o token de autenticação:', error);
    throw error;
  }
};

clear

const token = await getToken();
