import { useAmp } from 'next/amp'
import { H5 } from '~/components/text'
import { DeployButton, Button } from '~/components/buttons'
import Link from '~/components/text/link'

export default function Quickstart({ quickstart, icons, href, example, demo }) {
  const isAmp = useAmp()

  const Icon = ({ source }) =>
    !isAmp ? (
      <img alt={`Icon for ${quickstart}`} src={source} />
    ) : (
      <amp-img
        layout="responsive"
        alt={`Icon for ${quickstart}`}
        height="48"
        width="48"
        src={source}
      />
    )

  return (
    <div className="quickstart">
      <Link href={href}>
        <span className="quickstart-icons">
          {Array.isArray(icons) ? (
            icons.map((icon) =>
              typeof icon === 'object' ? (
                <span key={icon.src} style={{ backgroundColor: icon.color }}>
                  <Icon source={icon.src} />
                </span>
              ) : (
                <Icon source={icon} key={icon} />
              )
            )
          ) : typeof icons === 'object' ? (
            <span style={{ backgroundColor: icons.color }}>
              <Icon source={icons.src} />
            </span>
          ) : (
            <Icon source={icons} />
          )}
        </span>
        <H5>{quickstart}</H5>
        <span className="note">Read the guide</span>
      </Link>
      <div className="buttons">
        {example && <DeployButton url={example} />}
        {demo && (
          <a href={demo} target="_blank">
            <Button type="secondary">Live Example</Button>
          </a>
        )}
      </div>

      <style jsx>{`
        .quickstart {
          border-radius: 4px;
          border: 1px solid var(--accents-2);
          color: var(--accents-6);
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.2s ease, border 0.2s ease;
          text-decoration: none;
        }

        .quickstart:hover {
          box-shadow: var(--shadow-hover);
          border-color: transparent;
        }

        .quickstart :global(a) {
          display: block;
        }

        .quickstart :global(figure) {
          margin: 0;
        }

        .quickstart-icons {
          display: flex;
          width: 100%;
          height: 48px;
        }

        .quickstart :global(h5) {
          margin-bottom: 4px;
          margin-top: 16px;
          transition: color 0.1s ease;
          color: var(--accents-7);
        }

        .quickstart :global(a:hover h5) {
          color: var(--geist-foreground);
        }

        .quickstart-icons span {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-clip: padding-box;
          flex: 0 0 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
        }

        .quickstart-icons > span:not(:last-child),
        .quickstart-icons > :global(img:not(:last-child)) {
          margin-right: 8px;
        }

        .quickstart-icons > span :global(img) {
          width: 100%;
          max-height: 100%;
        }

        .quickstart-icons > :global(img) {
          width: 48px;
          height: 48px;
        }

        .note {
          color: var(--accents-5);
          font-size: var(--font-size-primary);
          line-height: var(--line-height-primary);
          transition: color 0.1s ease;
        }

        .quickstart :global(a):hover .note {
          color: var(--accents-7);
        }

        .quickstart .buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 24px;
        }

        .quickstart .buttons :global(> *) {
          flex: 1 1 50%;
        }

        .quickstart .buttons :global(> *:not(:last-child)) {
          margin-right: 8px;
        }

        .quickstart .buttons :global(> *:not(:first-child)) {
          margin-left: 8px;
        }

        .quickstart .buttons :global(.button) {
          width: 100%;
          min-width: 104px;
          padding: 0;
        }

        .quickstart .buttons a {
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
