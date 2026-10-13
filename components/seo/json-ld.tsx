interface JsonLdProps {
  data: Record<string, unknown>
}

export const JsonLd = ({ data }: Readonly<JsonLdProps>) => (
  <script
    type="application/ld+json"
    // biome-ignore lint/security/noDangerouslySetInnerHtml: Data is built from the static portfolio configuration.
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, '\\u003c'),
    }}
  />
)
