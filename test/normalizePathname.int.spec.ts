import { normalizePathname } from '../src/utilities/normalizePathname'

describe('normalizePathname', () => {
	test('returns "/" for empty string', () => {
		expect(normalizePathname('')).toBe('/')
	})

	test('returns "/" for root path', () => {
		expect(normalizePathname('/')).toBe('/')
	})

	test('trims trailing slashes', () => {
		expect(normalizePathname('/admin/')).toBe('/admin')
		expect(normalizePathname('/admin///')).toBe('/admin')
	})

	test('returns "/" when path is only slashes', () => {
		expect(normalizePathname('////')).toBe('/')
	})

	test('leaves paths without trailing slashes untouched', () => {
		expect(normalizePathname('/admin')).toBe('/admin')
		expect(normalizePathname('admin')).toBe('admin')
	})
})
