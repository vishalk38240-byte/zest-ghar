# Zest & Ghar marketplace

A Vite + React + Tailwind CSS project ready to deploy on Vercel.

## Deploy on Vercel

1. Extract this ZIP file.
2. Put the `zest_ghar_vercel_upload` folder in a GitHub repository (or deploy it with the Vercel CLI).
3. In Vercel, choose **Add New → Project** and import that repository.
4. Set the project root to `zest_ghar_vercel_upload` if it is inside a larger repository. If it is the repository root, leave the root setting as `.`.
5. Use these build settings (also present in `vercel.json`):
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
6. Select **Deploy**.

For a local preview, open a terminal in this folder and run `npm install`, then `npm run dev`.

## Notes

- No environment variables are required for the current demo.
- The demo saves account, cart, and other app state in the visitor's browser using local storage. It does not include a server-side database or real payment processing.
- Food photos are loaded from external image URLs, so those images require an internet connection.
