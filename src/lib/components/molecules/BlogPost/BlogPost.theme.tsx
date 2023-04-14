export type BlogPostTheme = {
  base: string;
  items: {
    base: string;
    variant: {
      horizontal: string;
      vertical: string;
    };
    image: {
      base: string;
      variant: {
        horizontal: string;
        vertical: string;
      };
    };
    blogContent: {
      base: string;
      variant: {
        horizontal: string;
        vertical: string;
      };
      textContent: {
        base: string;
        tags: {
          base: string;
          variant: {
            horizontal: string;
          };
        };
        paragraph: {
          base: string;
          title: string;
          description: string;
        };
      };
    };
  };
};

export const BLOG_POST_THEME: BlogPostTheme = {
  base: 'flex flex-wrap justify-center gap-6',
  items: {
    base: 'flex rounded-xl duration-300 ease-in hover:shadow-xl',
    variant: {
      horizontal: 'w-full border-[1px] border-gray-200',
      vertical: 'h-full max-w-xs flex-col'
    },
    image: {
      base: 'h-48 object-cover',
      variant: {
        horizontal: 'rounded-l-xl border-gray-400 lg:h-96',
        vertical: 'rounded-2xl border-[1px] border-gray-400 lg:h-56'
      }
    },
    blogContent: {
      base: 'flex flex-grow flex-col self-center',
      variant: {
        horizontal: 'm-10',
        vertical: 'pb-2'
      },
      textContent: {
        base: 'mb-5 grow border-b-2 border-gray-900/5 p-2 pb-5',
        tags: {
          base: 'my-2 flex gap-x-4 text-xs contrast-0',
          variant: {
            horizontal: 'm-auto w-2/3'
          }
        },
        paragraph: {
          base: 'flex flex-col gap-4',
          title: 'align-left relative font-normal text-xl',
          description: 'align-left relative font-normal sm:text-xs md:text-sm text-gray-500'
        }
      }
    }
  }
};
