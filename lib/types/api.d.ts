type NewRagSchema = {
  name: string;
  description: string;
  prompt?: string;
  system_prompt?: string;
};

type DataSource = {
  source: string;
  data_type:
    | "text"
    | "youtube_video"
    | "pdf_file"
    | "web_page"
    | "sitemap"
    | "xml"
    | "docx"
    | "docs_site"
    | "notion"
    | "csv"
    | "mdx"
    | "qna_pair"
    | "image"
    | "unstructured"
    | "json"
    | "openapi"
    | "gmail"
    | "substack"
    | "youtube_channel"
    | "discord"
    | "custom"
    | "rss_feed"
    | "beehiiv"
    | "google_drive"
    | "directory"
    | "slack"
    | "dropbox"
    | "text_file"
    | "excel_file"
    | "audio";
};

type RagQuery = {
  input_query: string;
  citations?: true;
};

type SearchRag = {
  query: string;
  num_documents?: number;
};
