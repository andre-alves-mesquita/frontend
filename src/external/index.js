export const externalVerify = () => {
    if (
        String(window.location.href).indexOf(
            window.location.origin + "/cadastro"
        ) !== -1
    ) {
        return true;
    }

    return false;
};