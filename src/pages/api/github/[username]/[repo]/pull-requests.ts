import { Octokit } from 'octokit';
import type { NextApiRequest, NextApiResponse } from 'next'
import { config } from '../../../../../config';

export default async function getPrsFromRepo(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const octokit = new Octokit({
    auth: config.GITHUB_PERSONAL_ACCESS_TOKEN,
  })

  const { data } = await octokit.rest.issues.listForAuthenticatedUser({
    state: 'closed',
    per_page: 100,
    filter: 'created',
    q: 'is:pr',
  });

  const { repo, username } = req.query;
  const prs = data.filter(({ repository }: any) => repository?.full_name === `${username}/${repo}`);

  const result = prs.reduce((acc: any, pr: any) => {
    const { pull_request, number, title, created_at, closed_at, repository } = pr;
    const { url, merged_at } = pull_request;
    const { language } = repository;
    return [
      ...acc,
      {
        url,
        number,
        title,
        created_at,
        closed_at,
        language,
        merged: !!merged_at
      }
    ]
  }, []);

  if (!result) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(result)
}
