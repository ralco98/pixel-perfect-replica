<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Front-end conventions
- Keep shared page presentation in the site components and content in the existing TanStack leaf routes so navigation and metadata remain consistent.
- Validate inquiry previews with the shared Zod schema; never imply a message was delivered without a connected submission service.
