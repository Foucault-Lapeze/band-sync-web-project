import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

const providers = [{ id: 'credentials', name: 'Credentials' }];

const signIn: (provider: AuthProvider) => void = async (provider) => {
    const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log(`Sign in with ${provider.id}`);
            resolve();
        }, 500);
    });
    return promise;
};

export default function BrandingSignInPage() {
    const theme = useTheme();
    return (
        // preview-start
        <AppProvider theme={theme}>
            <SignInPage
                signIn={signIn}
                providers={providers}
                slotProps={{ emailField: { autoFocus: false }, form: { noValidate: true } }}
            />
        </AppProvider>
    );
}
