export function normalizePathname(pathname: string) {
	if (!pathname || pathname === '/') {
		return '/'
	}

	const normalized = pathname.replace(/\/+$/, '')
	return normalized === '' ? '/' : normalized
}
