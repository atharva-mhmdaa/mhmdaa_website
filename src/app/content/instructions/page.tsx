import Link from 'next/link';
import type { Metadata } from 'next';
import CopyPrompt from './CopyPrompt';

export const metadata: Metadata = { title: 'How to Publish a Blog Post' };

const STEP_NUM: React.CSSProperties = {
  flexShrink: 0,
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: '#2A3F7A',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const STEP: React.CSSProperties = {
  display: 'flex',
  gap: 16,
  alignItems: 'flex-start',
  marginBottom: 20,
};

const NOTE: React.CSSProperties = {
  background: '#fffbeb',
  border: '1px solid #fde68a',
  borderRadius: 10,
  padding: '14px 18px',
  fontSize: '.9rem',
  color: '#78350f',
  lineHeight: 1.7,
  marginBottom: 20,
};

const SECTION: React.CSSProperties = {
  marginTop: 40,
  paddingTop: 32,
  borderTop: '2px solid #e2e8f0',
};

const H2: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: '1.3rem',
  fontWeight: 700,
  color: '#0D2140',
  marginBottom: 20,
};

export default function InstructionsPage() {
  return (
    <>
      <div className="dash-main__toolbar">
        <div>
          <h1 className="dash-main__title">How to Publish a Blog Post</h1>
          <p className="dash-main__subtitle">Simple steps - no technical knowledge needed.</p>
        </div>
        <Link href="/content/dashboard" className="btn-o" style={{ whiteSpace: 'nowrap' }}>
          Back to Dashboard
        </Link>
      </div>

      <div className="dash-card" style={{ padding: '32px 36px', maxWidth: 780, lineHeight: 1.8, color: '#3D4F63' }}>

        {/* ── PART 1: PUBLISH A POST ── */}
        <h2 style={H2}>Part 1 - Publishing a Blog Post</h2>

        <div style={STEP}>
          <div style={STEP_NUM}>1</div>
          <div>
            <strong>Log in to your website.</strong>
            <br />
            Go to <strong>mhmdaa.com/login</strong> and sign in with your email and password.
          </div>
        </div>

        <div style={STEP}>
          <div style={STEP_NUM}>2</div>
          <div>
            <strong>Click "New Post"</strong> on the dashboard (top right corner).
          </div>
        </div>

        <div style={STEP}>
          <div style={STEP_NUM}>3</div>
          <div>
            <strong>Fill in the Title and Short Summary.</strong>
            <br />
            The title is what appears on the blog card. The summary is the short description below it.
          </div>
        </div>

        <div style={STEP}>
          <div style={STEP_NUM}>4</div>
          <div>
            <strong>Add Topic Tags (optional).</strong>
            <br />
            Type a word like <em>Denials</em> and press Enter to add it as a tag.
          </div>
        </div>

        <div style={STEP}>
          <div style={STEP_NUM}>5</div>
          <div>
            <strong>Upload a Card Image (optional).</strong>
            <br />
            This is the photo shown on the blog card. If you skip it, a dark navy background is used automatically.
          </div>
        </div>

        <div style={STEP}>
          <div style={STEP_NUM}>6</div>
          <div>
            <strong>Upload your HTML file.</strong>
            <br />
            This is the page visitors will read. See Part 2 below to learn how to create this file.
            <br />
            The file must be under <strong>3 MB</strong>.
          </div>
        </div>

        <div style={STEP}>
          <div style={STEP_NUM}>7</div>
          <div>
            <strong>Click "Publish Now".</strong>
            <br />
            Your post goes live immediately. A card appears on the blog page automatically.
            The post gets its own link. Nothing else needs to be done.
          </div>
        </div>

        {/* ── PART 2: CREATE THE HTML ── */}
        <div style={SECTION}>
          <h2 style={H2}>Part 2 - How to Create the HTML File</h2>

          <p style={{ marginBottom: 20 }}>
            You create the HTML file by giving your blog content to an AI tool such as
            [ChatGPT] or [Google Gemini]. The AI writes the page for you.
            You then save it and upload it. Here is exactly how to do it:
          </p>

          <div style={STEP}>
            <div style={STEP_NUM}>1</div>
            <div>
              Open any AI tool you have access to - for example [ChatGPT] or [Google Gemini].
            </div>
          </div>

          <div style={STEP}>
            <div style={STEP_NUM}>2</div>
            <div>
              <strong>Copy the prompt below</strong> by clicking the blue Copy button.
              Paste it into the AI. Then replace the last line with your actual blog post text and press Enter.
            </div>
          </div>

          <CopyPrompt text={`Create a complete blog post webpage for me. Here are the requirements:

1. The page must be a single HTML file with all styles included inside it. No separate files.
2. Use Google Fonts: DM Sans for regular text, Playfair Display for headings.
3. Brand colours to use:
   - Dark navy: #0D2140 (use for header bar, section numbers, cards)
   - Red accent: #C8102E (use for highlights and the stat bar)
   - Gold accent: #C9A84C (use for italic titles and gold details)
   - Body text: #4A5568
   - Background: #f4f7fb
4. Layout:
   - A sticky dark navy header bar at the top with "MHMDAA" in white capital letters on the left, and "The Hospital Operations Company" in small text on the right.
   - A large dark navy hero section with the blog title in large Playfair Display font. Make the subtitle or year in gold italic.
   - A red stat bar below the hero showing 3 key numbers or facts from the content.
   - The main article body in numbered sections (01, 02, 03). Each section has a circle number badge, a heading, and content.
   - Use white cards with a coloured left border for lists or categories.
   - A dark navy closing band at the bottom with a call to action.
   - A dark navy footer with "MHMDAA" and "mhmdaa.com".
5. The page must look good on mobile phones and on desktop screens.
6. Keep the file size under 3 MB. Do not embed large photos.

Here is my blog post content:
[PASTE YOUR BLOG POST TEXT HERE]`} />

          <div style={STEP}>
            <div style={STEP_NUM}>3</div>
            <div>
              The AI will give you a page of code. <strong>Copy all of it.</strong>
            </div>
          </div>

          <div style={STEP}>
            <div style={STEP_NUM}>4</div>
            <div>
              Open <strong>Notepad</strong> on your computer (search for "Notepad" in the Start menu).
              Paste the code into Notepad.
            </div>
          </div>

          <div style={STEP}>
            <div style={STEP_NUM}>5</div>
            <div>
              Save the file. When saving, type the file name ending in <strong>.html</strong>
              - for example: <strong>my-blog-post.html</strong>
              <br />
              <em style={{ fontSize: '.88rem', color: '#64748b' }}>
                Important: When saving in Notepad, change "Save as type" to "All Files" so it saves as .html and not .txt
              </em>
            </div>
          </div>

          <div style={STEP}>
            <div style={STEP_NUM}>6</div>
            <div>
              Upload that file in Step 6 of Part 1 above.
            </div>
          </div>
        </div>

        {/* ── PART 3: AI PROMPTS ── */}
        <div style={SECTION}>
          <h2 style={H2}>Part 3 - Extra Prompts for Common Situations</h2>
          <p style={{ marginBottom: 8 }}>
            Use these prompts in the same AI chat session after the main prompt above.
          </p>

          <p style={{ fontWeight: 700, color: '#2A3F7A', marginTop: 24, marginBottom: 4 }}>
            If the file is too large (over 3 MB):
          </p>
          <CopyPrompt text={`The HTML file is too large. Please reduce the file size. Remove any large embedded photos and replace them with Unsplash image links instead (e.g. https://images.unsplash.com/photo-XXXXXXX?w=800). The final file must be under 3 MB.`} />

          <p style={{ fontWeight: 700, color: '#2A3F7A', marginTop: 24, marginBottom: 4 }}>
            If you want to add a photo to the page:
          </p>
          <CopyPrompt text={`Add 2 relevant photos to this page. Use free images from Unsplash related to healthcare or hospital revenue cycle management. Use Unsplash links directly in the HTML (https://images.unsplash.com/photo-XXXXXXX?w=1200). Do not embed the photos as base64 - use the links only. Make sure the images look good on mobile.`} />

          <p style={{ fontWeight: 700, color: '#2A3F7A', marginTop: 24, marginBottom: 4 }}>
            If you have your own image to include (such as a chart or photo):
          </p>
          <CopyPrompt text={`I have attached an image. Please embed it directly into the HTML file. Place it in a relevant section of the article. Make sure it is responsive and looks good on mobile screens.`} />

          <p style={{ fontWeight: 700, color: '#2A3F7A', marginTop: 24, marginBottom: 4 }}>
            Before saving - ask the AI to check the file:
          </p>
          <CopyPrompt text={`Before I copy this, please check:
1. Is everything in one single HTML file?
2. Does the page look good on a mobile phone?
3. Is the total file size under 3 MB?
4. Does the header say MHMDAA in the top bar?

If anything needs fixing, fix it and give me the corrected final version.`} />
        </div>

        {/* ── PART 4: MANAGING POSTS ── */}
        <div style={SECTION}>
          <h2 style={H2}>Part 4 - Editing and Removing Posts</h2>

          <div style={NOTE}>
            Go to the Dashboard and click <strong>Edit</strong> next to any post to make changes.
          </div>

          <p style={{ marginBottom: 12 }}>
            <strong>To change the title, summary, or image:</strong> Click Edit, make your changes, click Save.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>To replace the HTML page:</strong> Click Edit, scroll down to the HTML file section, upload a new file, click Save.
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>To hide a post without deleting it:</strong> Click Edit, click "Save as Draft". The post disappears from the public blog but is saved.
          </p>
          <p style={{ marginBottom: 24 }}>
            <strong>To permanently delete a post:</strong> Click Edit, click "Delete Post". This cannot be undone.
          </p>
        </div>

        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'flex-end' }}>
          <Link href="/content/dashboard" className="btn-p">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
