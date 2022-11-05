import { Avatar, TopBar } from "@shopify/polaris"

export const Header = () => {
    const userMenuActions = [
        {
            items: [{ content: 'Log out' }],
        },
    ];

    return <TopBar
        showNavigationToggle={false}
        userMenu={<TopBar.UserMenu
            actions={userMenuActions}
            detail="admin"
            name="Hari"
            initials="H"
            open={false}
            onToggle={() => null}
            avatar={"/random-human.webp"}
        />}
        searchResultsVisible={false}
    />
}