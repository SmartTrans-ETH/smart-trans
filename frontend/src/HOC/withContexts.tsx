import UserProvider from '../contexts/user'
import MetamaskProvider from '../contexts/metamask'

function withContexts(Component: any) {
    return (props: JSX.IntrinsicAttributes) => (
        <MetamaskProvider>
            <UserProvider>
                <Component {...props} />
            </UserProvider>
        </MetamaskProvider>
    )
}

export default withContexts
